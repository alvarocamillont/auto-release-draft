import * as core from '@actions/core'

export async function run(): Promise<void> {
  try {
    core.setOutput(
      'release-url',
      'https://github.com/alvarocamillont/auto-release-draft'
    )
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
