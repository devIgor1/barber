"use client"

import { createContext, ReactNode, useState } from "react"
import { ScheduleItem } from "@/app/dashboard/page"
import { ModalSchedule } from "./ModalSchedule"

interface ModalContextData {
  visible: boolean
  handleModalVisible: () => void
  setScheduleDetail: (detail: ScheduleItem) => Promise<void>
}

export const ModalContext = createContext({} as ModalContextData)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState<boolean>(false)

  function handleModalVisible() {
    setVisible(!visible)
  }

  async function setScheduleDetail(detail: ScheduleItem) {
    console.log(detail)
  }

  return (
    <ModalContext.Provider
      value={{ handleModalVisible, visible, setScheduleDetail }}
    >
      {visible && <ModalSchedule />}
      {children}
    </ModalContext.Provider>
  )
}
