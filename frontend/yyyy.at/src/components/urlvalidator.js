const emojiRegex = require('emoji-regex');

function urlvalidator(url)
{
    const regex = emojiRegex();

    if (url === '')
    {
        return false;
    }
    
    let url_replace = url.replaceAll(regex, '');

    if (url_replace === '')
    {
        return true;
    }
    else
    {
        return false;
    }
}

export default urlvalidator;