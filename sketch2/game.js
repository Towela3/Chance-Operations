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
        text: 'Welcome To Moderator!',
        options: [
            {
                text: 'START',
                setState: { blueGoo: true },
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Storyline: You have recently been hired at Real News Broadcast as an intern for the summer in the journalism department. Bright eyed and bushy tailed, you are ready to change the world for the better. You have worked so hard to be where you are now and you are just inching closer to this being your dream job in the future. Do Not Screw It Up'
        , options: [
            {
                text: 'Ready To Start',
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
                text: 'Interesting',
                nextText: 4
            },
            {
                text: 'Okay?',
                nextText: 4
            },
        ]
    },
    {
        id: 4,
        text: 'First Assignment: Your manager would like to see you work on your first project to see how you do. They give an option to pick which platform you’d like to embark on.',
        options: [
            {
                text: 'Twitter',
                nextText: 5
            },
            {
                text: 'Facebook',
                nextText: -1
            }
        ]
    },
    {
        id: 5,
        text: 'You choose Twitter and spend the next week working pretty hard on your assignment and research. You ask someone from the team to look it over and they advise you to spice it up',
        options: [
            {
                text: 'Spice it up',
                nextText: 6
            },
            {
                text: 'Rewrite it to make it more interesting',
                nextText: 7
            }

        ]
    },
    {
        id: 6,
        text: 'You spice up your assignment, stating that, "President Biden is in a political brawl with the Supreme Court over passing student forgiveness progrom"',
        options: [
            {
                text: 'Submit to manager',
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: 'You excitedly rewrite your assignment, stating that "President Biden passed a new law forgiving any born American Citizens student loans but only effective for three months',
        options: [
            {
                text: 'Submit it manager',
                nextText: 9
            }
        ]
    },
    {
        id: 8,
        text: 'Your manager reads it over, exclaiming that it will get people to read but is not enaging enough to pull outside of the basic audience',
        options: [
            {
                text: 'Okay, thank you for the feedback',
                nextText: 10
            }
        ]
    },
    {
        id: 9,
        text: 'Your manger excitedly reads your assignment, giving you a nod of approvel, "This is going to get some people talking, good job"',
        options: [
            {
                text: 'Thank you so much',
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        text: 'The monster laughed as you hid behind your shield and ate you.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 11,
        text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    }
]

startGame()