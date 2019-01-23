const dark = '\x1b[38;5;29m';
const light = '\x1b[38;5;115m';
const reset = '\x1b[0m';
const wblyCrown = `
                              ${reset}
         ${dark}\\        ${light}_${dark}        /  ${reset}
         ${dark}WW\\    ${light}/MMM\\${dark}    /WW  ${reset}
         ${dark}WWWW\\${light}/MMMMMMM\\${dark}/WWWW  ${reset}
         ${dark}WWW${light}/MMMMMMMMMMM\\${dark}WWW  ${reset}
         ${dark}W${light}/MMMMMMMMMMMMMMM\\${dark}W  ${reset}
                              ${reset}`;

module.exports = wblyCrown;
