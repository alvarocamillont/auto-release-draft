import * as core from '@actions/core'
import {run} from '../src/main'

jest.mock('@actions/core')

describe('Quando a ação for executada', () => {
  const fakeSetOutPut = core.setOutput as jest.MockedFunction<
    typeof core.setOutput
  >
  test('deve configurar o parametro de output', async () => {
    await run()
  })
})
