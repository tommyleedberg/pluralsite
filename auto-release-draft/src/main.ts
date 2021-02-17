import * as core from '@actions/core'
export {
  run
}

async function run(): Promise<void> {
  try {
    core.debug("Made it into the function")
    core.setOutput("release-url", "https://example.com")
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
