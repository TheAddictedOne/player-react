import express from 'express'
import { Client } from "@notionhq/client"

const NOTION_SECRET = 'secret_GvkGF8bDdW5m4woWaEBjSSTULnRWnLqQEINYYbxiEbA'
const NOTION_DATABASE = '6d18851891794ee08c2eeabd59773161'

const app = express()
const port = 8080
const notion = new Client({ auth: NOTION_SECRET })

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASE },
      properties: {
        title: {
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

app.get('/', (req, res) => {
  addItem("Custom test notion API")
  res.json({ ok: 'ok' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
