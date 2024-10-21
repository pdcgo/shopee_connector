export const replyDictionary = [
    `Excited about the future of crypto? This article covers all the key insights! 🚀 [link]`,
`Want to learn how crypto is disrupting traditional finance? Check this out! 💰 [link]`,
`Ready to dive into the world of cryptocurrency? This article is your guide! 🌍 [link]`,
`Here’s why everyone’s talking about blockchain and crypto right now! 🔗 [link]`,
`Thinking of investing in crypto? This article explains what you need to know! 💡 [link]`,
`Crypto can be confusing, but this article breaks it down in simple terms. 📊 [link]`,
`The crypto revolution is happening. Stay informed with this deep dive! 🚀 [link]`,
`Crypto in 2024: Here’s what to expect from the future of digital currencies. 🔮 [link]`,
`Want to understand how DeFi is changing finance? This is a must-read! 📉 [link]`,
`Curious about the next big thing in crypto? Discover it here! 🌐 [link]`,
`Find out how crypto is transforming the global financial system! 🌎 [link]`,
`The latest trends in cryptocurrency are all here—don’t miss out! 📈 [link]`,
`Thinking about blockchain tech? This article explores why it’s so important. 💻 [link]`,
`Crypto explained: Here’s everything you need to know about digital assets. 🪙 [link]`,
`How does cryptocurrency work? Find out in this detailed guide! 🧐 [link]`,
`Want to know more about Bitcoin and its future? This article is for you! 🔥 [link]`,
`The impact of crypto on the economy is huge. Learn more about it here! 🌍 [link]`,
`Interested in altcoins? This article explores some exciting alternatives to Bitcoin. 💸 [link]`,
`Crypto adoption is growing fast. Here’s why you should pay attention. 🌐 [link]`,
`Discover how blockchain is reshaping industries beyond finance! 🚀 [link]`,
`Is crypto here to stay? This article dives into the future of digital currency. 💡 [link]`,
`Blockchain, smart contracts, and DeFi—learn how they’re changing everything! 💼 [link]`,
`Explore the basics of cryptocurrency and why it’s more than just Bitcoin! 🪙 [link]`,
`What makes blockchain technology so revolutionary? Find out here. 📜 [link]`,
`Crypto trends to watch in 2024—this article covers the most important ones. 🔮 [link]`,
`Looking for the next big opportunity in crypto? This article might have the answer! 💸 [link]`,
`The future of money? Learn why crypto could be the answer. 🌍 [link]`,
`Decentralization and its role in crypto—here’s what you should know! 🔗 [link]`,
`Crypto’s impact on traditional banking—explore how it's shaking things up. 💡 [link]`,
`The rise of digital currencies: What you need to know about the crypto market! 🧐 [link]`,
`Crypto investing made simple—here’s how to get started! 🚀 [link]`,
`Want to learn about NFTs and their connection to cryptocurrency? Click here! 🎨 [link]`,
`The crypto landscape is evolving—this article explains what’s next. 🔥 [link]`,
`Is Bitcoin still king? Discover what’s happening in the world of cryptocurrency. 👑 [link]`,
`Crypto innovations to watch in 2024—get the latest insights! 🌐 [link]`,
`Stay updated on the most important crypto news with this article! 💬 [link]`,
`Ready to enter the world of digital assets? This guide is perfect for beginners! 📝 [link]`,
`How is blockchain transforming industries like healthcare and finance? Find out here! 🏥 [link]`,
`Crypto security tips—how to protect your investments in the digital world. 🔒 [link]`,
`What’s next for Ethereum and smart contracts? This article breaks it down. 💻 [link]`,
`Learn how crypto is creating opportunities for businesses globally! 🌍 [link]`,
`Why are governments paying more attention to cryptocurrency? Discover why here. 📜 [link]`,
`How to navigate the world of crypto trading—this article has some helpful tips! 📈 [link]`,
`The future of decentralized finance (DeFi) is bright. Get a glimpse of what’s ahead! 📉 [link]`,
`Wondering how crypto fits into the broader economy? This article has the answers. 🌎 [link]`,
`Crypto and environmental concerns—what you need to know about sustainable solutions. 🌱 [link]`,
`Find out how blockchain is improving transparency and security across industries! 🔒 [link]`,
`Get the inside scoop on the biggest crypto developments of the year! 🚀 [link]`,
`Curious about the risks and rewards of crypto? This article covers both sides! ⚖️ [link]`,
`Explore the intersection of cryptocurrency and AI—how are they shaping the future? 🤖 [link]`,
`Wondering what’s next for crypto? This article gives a great breakdown of the latest trends and predictions! 🚀 [link]`,
`New to crypto? This is a must-read to understand the basics and where the market is heading. 💡 [link]`,
`From Bitcoin to altcoins—here’s a deep dive into the crypto space that you don’t want to miss! 🌐 [link]`,
`Ready to explore the future of finance? This article covers the game-changing impact of cryptocurrency! 💰 [link]`,
`Curious about blockchain tech and its role in revolutionizing industries? This piece sheds some light! 🔗 [link]`,
`Crypto adoption is on the rise! Here’s how it’s reshaping global finance. Check it out! 🌎💸 [link]`,
`The crypto world can seem complex, but this article makes it easier to understand. Worth a look! 🧐 [link]`,
`Whether you’re an investor or just curious, this crypto guide has all the latest updates! 📈 [link]`,
`Thinking about getting into crypto? This article explains why now might be the time to dive in! 🚀💡 [link]`,
`Blockchain, DeFi, and more—this article breaks it all down in simple terms. Perfect for beginners! 📊 [link]`,
`Crypto is evolving fast. Stay ahead of the curve with this insightful read! 🌐🔮 [link]`,
`Curious about the latest in crypto regulations? This article covers what you need to know. 📜 [link]`,
`Crypto isn’t just about Bitcoin anymore. Discover new opportunities in this detailed analysis! 🪙 [link]`,
`Ever wondered how crypto will impact the global economy? Here’s an interesting perspective! 🌍 [link]`,
`Ready to learn about decentralized finance (DeFi)? This article explains why it's a big deal. 📉💡 [link]`,
`Stay informed about the crypto market with this comprehensive guide. A must-read for any enthusiast! 🔥 [link]`,
`The crypto revolution is here—don’t miss out on the latest developments in the space! 🚀📈 [link]`,
`Confused about how crypto works? This article makes it simple. Get the details here! 🧐🔗 [link]`,
`Crypto trends to watch out for in 2024—stay ahead with these insights! 🔮💡 [link]`,
`What’s next for digital currencies? This article offers a look into the future of crypto! 🌍💸 [link]`
]


export function createReplyFormat(link: string): string {
    const item = replyDictionary[Math.floor((Math.random()*replyDictionary.length))];
    return item.replaceAll("[link]", link)
    
}