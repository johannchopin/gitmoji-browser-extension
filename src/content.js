const { gitmojis } = require('gitmojis')

let re = ''

gitmojis.forEach(gitmoji => {
    re += `\\${gitmoji.code.slice(0, -1)}\:|`
})

document.body.innerHTML = document.body.innerHTML.replace(new RegExp(re.slice(0, -1), "i"), function (match) {
    const matchingGitmoji = gitmojis.find(gitmoji => gitmoji.code === match)

    return matchingGitmoji !== undefined ? matchingGitmoji.emoji : match
});
