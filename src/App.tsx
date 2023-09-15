import { useState } from 'react'
import './App.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const defaultMarkdown =  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, between 2 backticks.

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://miro.medium.com/v2/resize:fit:580/1*4xfxyfJ336M3vvZQIY7Kaw.png)
`


function App() {
  const [markdownText, setMardownText] = useState<string>(defaultMarkdown)
  return (
    <>
    <div>
      <h1 style={{textAlign: 'center'}}>Markdown Previewer</h1>
      <div className="boxes">
        <textarea className='textarea' name='editor' id='editor' value={markdownText} onChange={(e)=> setMardownText(e.target.value)} rows={20}></textarea>
        <div id='preview'>
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
    </>
  )
}
export default App

