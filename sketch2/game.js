const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: '📰 Welcome To Real News! 🗞',
        options: [
            {
                text: 'START 👍',
                setState: { blueGoo: true },
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Storyline: You have recently been hired at 🚨 Real News Broadcast 🚨 as an intern for the summer in the journalism department. Bright eyed and bushy tailed, you are ready to change the world for the better. You have worked so hard to be where you are now and you are just inching closer to this being your dream job in the future. Do Not Screw It Up! 😅'
        , options: [
            {
                text: 'Ready To Start 🤝',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: true },
                nextText: 3
            }
        ],
    },
    {
        id: 3,
        text: 'You meet with your manager who invites you to your first morning meeting with the rest of the department.',
        options: [
            {
                text: 'Interesting 🙂',
                nextText: 4
            },
            {
                text: 'Okay? 🙃',
                nextText: 4
            },
        ]
    },
    {
        id: 4,
        text: 'First Assignment: Your manager would like to see you work on your first project to see how you do. They give an option to pick which platform you’d like to embark on.',
        options: [
            {
                text: '▶︎ Twitter',
                nextText: 5
            },
            {
                text: '▶︎ Facebook',
                nextText: 15
            }
        ]
    },
    {
        id: 5,
        text: 'You choose Twitter and spend the next week working pretty hard on your assignment and research. You ask someone from the team to look it over and they advise you to spice it up',
        options: [
            {
                text: 'Spice it up 🌶',
                nextText: 6
            },
            {
                text: 'Rewrite it to make it more interesting 🤔',
                nextText: 7
            }

        ]
    },
    {
        id: 6,
        text: 'You spice up your assignment, stating that, "President Biden is in a political 🥊 brawl with the 👩‍⚖️ Supreme Court over passing student forgiveness progrom"',
        options: [
            {
                text: 'Submit to manager 👍',
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: 'You excitedly rewrite your assignment, stating that "President Biden passed a new law forgiving any born 🇺🇸 American Citizens student 💸 loans but only effective for three months',
        options: [
            {
                text: 'Submit it manager 👍',
                nextText: 9
            }
        ]
    },
    {
        id: 8,
        text: 'Your manager reads it over, exclaiming that it will get people to read but is not enaging enough to pull outside of the basic audience',
        options: [
            {
                text: 'Okay, thank you for the feedback 🙃',
                nextText: 10
            }
        ]
    },
    {
        id: 9,
        text: 'Your manger excitedly reads your assignment, giving you a nod of approvel, 😏 "This is going to get some people talking, good job"',
        options: [
            {
                text: 'Thank you so much 🙂',
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        text: 'For your next assignment, you know you need to find something bigger and better, that is going to ensure enagement',
        options: [
            {
                text: '🚨 Police Brutality 🚔',
                nextText: 11
            },
            {
                text: '🤑 Cryptocurrency 💰',
                nextText: 12
            }
        ]
    },
    {
        id: 11,
        text: 'Your assignment reads, "Florida police department randomly planning to raid predominantly 👩🏾‍🎓 African American 🎓 High schools in search of 🔫 guns and 💊 drugs"',
        options: [
            {
                text: 'Sumbit to manager 👍',
                nextText: 13
            }
        ]
    },
    {
        id: 12,
        text: 'Your assignment reads, "Cryptocurrency becoming more popular, some retail 🛍 stores even accepting it along side Apple pay, 💳 VISA and Google pay"',
        options: [
            {
                text: 'Sumbit to manager 👍',
                nextText: 13
            }
        ]
    },
    {
        id: 13,
        text: 'While having a 🏢 department meeting, your manager presents an 📈 increase in audience enagement, including that some of your work has been the cause of the recent increase',
        options: [
            {
                text: 'Just doing my job!',
                nextText: 14
            }
        ]
    },
    {
        id: 14,
        text: 'On break, you overhear something you wrote about being discussed. As you continue to listen the information getting shared is so far-fetched from what you initially shared. The discussion starts to get heated as it continues… ',
        options: [
            {
                text: 'Speak Up 🗣',
                nextText: 15
            },
            {
                text: 'I was just doing my job 🤷‍♂️',
                nextText: 15
            }
        ]
    },
    {
        id: 15,
        text: '“Just doing your job” or “speaking up” would do nothing. The information has already been spread; not only is this false information effecting people around your but people in other parts of the world as well.',
        options: [
            {
                text: '😠 Do Better 👎',
                nextText: 1
            }
        ]
    },
    {
        id: 16,
        text: 'You choose Facebook and spend the next week working pretty hard on your assignment and research. You ask someone from the team to look it over and they advise you to make it more interesting',
        options: [
            {
                text: 'Revise your assignment',
                nextText: 16
            },
            {
                text: 'Make it your own',
                nextText: 17
            },
        ]
    },
    {
        id: 17,
        text: 'You revise your assignment, claiming that "the President himself has hinted to being apart of the infamous Illuminati group."',
        options: [
            {
                text: 'Turn into manager',
                nextText: 18
            },
        ]
    },
    {
        id: 18,
        text: 'You change a bit of information, coloring in your own facts to make an enaging story."President planning to end term early as news comes in of his involvement in the infamous Illuminati group."',
        options: [
            {
                text: 'Turn into manager',
                nextText: 19
            },
        ]
    },
    {
        id: 19,
        text: 'One quick skim over at your assignment, your manger nods, "this is a good start but next time, we need a bit more"',
        options: [
            {
                text: 'Will do better next time',
                nextText: 20
            },
        ]
    },
    {
        id: 20,
        text: '',
        options: [
            {
                text: 'I appreciate the feedback',
                nextText: 14
            },
        ]
    },
    {
        id: 21,
        text: 'You choose Facebook and spend the next week working pretty hard on your assignment and research. You ask someone from the team to look it over and they advise you to make it more interesting',
        options: [
            {
                text: 'Revise your assignment',
                nextText: 14
            },
            {
                text: 'Make it your own',
                nextText: 14
            },
        ]
    },
    {
        id: 22,
        text: 'You choose Facebook and spend the next week working pretty hard on your assignment and research. You ask someone from the team to look it over and they advise you to make it more interesting',
        options: [
            {
                text: 'Revise your assignment',
                nextText: 14
            },
            {
                text: 'Make it your own',
                nextText: 14
            },
        ]
    },
    {
        id: 23,
        text: 'You choose Facebook and spend the next week working pretty hard on your assignment and research. You ask someone from the team to look it over and they advise you to make it more interesting',
        options: [
            {
                text: 'Revise your assignment',
                nextText: 14
            },
            {
                text: 'Make it your own',
                nextText: 14
            },
        ]
    },
    {
        id: 24,
        text: '',
        options: [
            {
                text: 'Revise your assignment',
                nextText: 14
            },
            {
                text: 'Make it your own',
                nextText: 14
            },
        ]
    },
]

startGame()