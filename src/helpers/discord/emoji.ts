export const emoji: Record<Name, EmojiCode> = {
  respond: '<:LunaRespond:1030947788038623282>',
  deepl: '<:deepl:1030947783907229696>',
  nbsp: '<:nbsp:1030947789435314198>',
  discord: '<:Discord:1030947785261985842>',
  holo: '<:Hololive:1030947786448982087>',
  ping: '<:WatamePing:1030947793348612126>',
  tc: '<:TwitCasting:1030947792081924177>',
  yt: '<:YouTube:1030947794615283732>',
  peek: '<:GatorYay:977005487012859964>',
  niji: '<:nijisanji:1030947790769115198>',
} as const

///////////////////////////////////////////////////////////////////////////////

type Name = string
type EmojiCode = string
