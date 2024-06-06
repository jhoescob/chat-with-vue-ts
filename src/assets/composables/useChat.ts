import { ref } from 'vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import type { YesNoResponse } from '@/interfaces/yes-no.response'
import { sleep } from '@/helpers/sleep'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([])

  const getHerResponse = async () => {
    //make a request to yesno api
    const response = await fetch('https://yesno.wtf/api')
    const data = (await response.json()) as YesNoResponse

    messages.value.push({
      id: new Date().getTime(),
      message: data.answer,
      image: data.image,
      itsMe: false
    })
  }

  const onMessage = async (text: string) => {
    if (text.length === 0) return

    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMe: true
    })

    //Evaluate if the message is a question
    if (text.endsWith('?')) {
      await sleep(1)
      getHerResponse()
    } else {
      messages.value.push({
        id: new Date().getTime(),
        message: 'Sooo..??',
        itsMe: false
      })
    }
  }

  return {
    //props
    messages,
    //Methods

    onMessage
  }
}
