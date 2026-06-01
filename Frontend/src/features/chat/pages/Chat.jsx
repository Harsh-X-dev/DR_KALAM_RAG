// import React from 'react'
import { UserMessage, SystemMessage } from "../components/ChatMessages.jsx";
export const Chat = () => {
  return (
    <div className="w-full p-8">
                <div className="max-w-4xl mx-auto pb-6">
                  <UserMessage text="What did Dr. Kalam say about dreams?" />
    
                  <SystemMessage
                    text="Dr. Kalam believed that “Dreams are not what you see in sleep, dreams are those that do not let you sleep.” He emphasized that dreams have the power to transform into thoughts and actions that can change the world."
                    sources={[
                      "Wings of Fire (Autobiography)",
                      "Ignited Minds",
                      "My Journey",
                    ]}
                  />
                </div>
              </div>
  )
}
