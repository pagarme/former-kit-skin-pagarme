jest.genMockFromModule('shortid')

const shortid = {
  generate: () => 'always-the-same-string',
}

export default shortid

