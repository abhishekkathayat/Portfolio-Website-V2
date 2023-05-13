export async function processDescriptionEmojis(description: string): Promise<string> {
    const emojiRegex: RegExp = /:([a-z0-9_+-]+):/g;
    const matches: any = description.match(emojiRegex);

    if(!matches) {
        return description;
    }

    const uniqueMatches: Array<string> = Array.from(new Set(matches));
    const emojisMap: Map<string, string> = await getEmojisMap();

    for(const match of uniqueMatches) {
        const emojiCode: string = match.slice(1, -1);
        const emojiUrl: any = emojisMap.get(emojiCode);
        
        if(emojiUrl) {
            const imageElement: any = `<img src=${emojiUrl} alt=${emojiCode} height="20" width="20" class="inline-block" />`;
            description = description.replace(new RegExp(match, 'g'), imageElement);
        }
    }
    return description;
}

async function getEmojisMap(): Promise<Map<string, string>> {
    const emojisMap: Map<string, string> = new Map<string, string>();

    const response: any = await useFetch('/api/github-emoji')
        .then(response => response.data.value);

        for(const emoji in response) {
            emojisMap.set(emoji, response[emoji]);
        }
    return emojisMap;
}