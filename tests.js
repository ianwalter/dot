const { test } = require('@ianwalter/bff')
const dot = require('.')

test('simple get', t => {
  t.expect(dot.get({ key: { to: 'life' } }, 'key.to')).toBe('life')
})

test('fallback to default', t => {
  t.expect(dot.get({}, 'ok.so', 'what')).toBe('what')
})

test('simple set', t => {
  t.expect(dot.set({}, 'dre.skull', 1)).toEqual({ dre: { skull: 1 } })
})

test('simple delete', t => {
  t
    .expect(dot.del({ you: { know: false, dont: 'know' } }, 'you.dont'))
    .toEqual({ you: { know: false } })
})

test('simple has', t => {
  t.expect(dot.has({ say: { a: 'prayer' } }, 'say.a')).toBe(true)
  t.expect(dot.has({ say: { a: 'prayer' } }, 'say.b')).toBe(false)
})
