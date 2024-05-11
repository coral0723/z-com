"use client"

import {createContext, ReactNode, useState} from "react";

export const TabContext = createContext({
  tab: 'rec',
  setTab: (value: 'rec' | 'fol') => {}, //타입스크립트에서는 || 대신 |를 쓴다.
});

type Props = { children: ReactNode };

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('rec');

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  )
}