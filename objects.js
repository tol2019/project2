/**
 * Created by: Greg Bunyea
 * Modified by: Hao Li
 */

let template = {
    "name": "",
    "text": "",
    "buttons": [
        {
            "id": "",
            "image": "",
            "description": "",
            "answer": true,
            "feedback": "",
            "whereTo": ""
        },
        {
            "id": "",
            "image": "",
            "description": "",
            "answer": false,
            "feedback": "",
            "whereTo": ""
        },
        {
            "id": "",
            "image": "",
            "description": "",
            "answer": false,
            "feedback": "",
            "whereTo": ""
        },
        {
            "id": "",
            "image": "",
            "description": "",
            "answer": false,
            "feedback": "",
            "whereTo": ""
        }
    ]
}

let questions = [
    {
        "name": "ques1",
        "text": "Make a visual of how a steel rod sharpens a kinfe. Which of the following does your answer most resemble?",
        "buttons": [
            {
                "id": "b1",
                "image": "assets/round-to-point.png",
                "description": "round tip made pointy",
                "answer": false,
                "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
                "whereTo": "scene2"
            }, {
                "id": "b2",
                "image": "assets/curve-to-point.png",
                "description": "bent tip straightened",
                "answer": true,
                "feedback": "Very good, let's see how much you know about sharpening steels.",
                "whereTo": "ques4"
            }, {
                "id": "b3",
                "image": "assets/round-to-shorterpoint.png",
                "description": "round tip had sides removed to make point",
                "answer": false,
                "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
                "whereTo": "scene2"
            }, {
                "id": "b4",
                "image": "assets/point-to-round.png",
                "description": "pointed tip has been rounded off",
                "answer": false,
                "feedback": "Incorrect, this would mean the knife has gotten more dull",
                "whereTo": "ques1"
            }
        ]
    },
    {
        "name": "ques2",
        "text": "Based on these new pieces of information, do you think there is a difference between how the sharpening tool and sharpening steel works?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "Yes",
                "answer": true,
                "feedback": "Great job, lets now see what that difference is.",
                "whereTo": "scene3"
            }, {
                "id": "b2",
                "image": "",
                "description": "No",
                "answer": false,
                "feedback": "That’s not quite right, but keep watching to learn why. We’ll return to this question again soon.",
                "whereTo": "scene3"
            }
        ]
    },
    {
        "name": "ques3",
        "text": "Now that you know that the sharpening steel uses a different technique from the sharpening tool, which visual shows the mechanism of how using the steel sharpens the knife?",
        "buttons": [ //same answers from q1, different order
            {
                "id": "b1",
                "image": "assets/point-to-round.png",
                "description": "pointed tip has been rounded off",
                "answer": false,
                "feedback": "Incorrect, this would mean the knife has gotten more dull",
                "whereTo": "ques3"
            }, {
                "id": "b2",
                "image": "assets/round-to-shorterpoint.png",
                "description": "round tip had sides removed to make point",
                "answer": false,
                "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
                "whereTo": "scene3"
            }, {
                "id": "b3",
                "image": "assets/round-to-point.png",
                "description": "round tip made pointy",
                "answer": false,
                "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
                "whereTo": "scene3"
            }, {
                "id": "b4",
                "image": "assets/curve-to-point.png",
                "description": "bent tip straightened",
                "answer": true,
                "feedback": "Correct!",
                "whereTo": "ques4"
            }
        ]
    },
    {
        "name": "ques4",
        "text": "In this case, what’s the most effective way to make the knife sharp again?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "Grind the edge off and make a new sharp edge",
                "answer": false,
                "feedback": "That’s not quite right, but keep watching to learn why. We’ll return to this question again soon",
                "whereTo": "scene4"
            }, {
                "id": "b2",
                "image": "",
                "description": "Realign the blade so the sharp edge is pointing down again",
                "answer": true,
                "feedback": "Correct!",
                "whereTo": "scene4"
            }, {
                "id": "b3",
                "image": "",
                "description": "Figure out the new angle to hold the knife at so the sharp edge will be doing the cutting",
                "answer": false,
                "feedback": "No, this would mean you are going to constantly adjust your cutting angle as you use the knife, there’s a more efficient way.",
                "whereTo": "ques4"
            }
        ]
    },



    {
        "name": "grinding01",
        "text": "What shape is the grinder?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "V",
                "answer": true,
                "feedback": "Correct!",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "U",
                "answer": false,
                "feedback": "Incorrect. This shape is not pointed so grinding in this shape will result in a round knife that will not cut.",
                "whereTo": ""
            },
            {
                "id": "b3",
                "image": "",
                "description": "|_|",
                "answer": false,
                "feedback": "Incorrect. This shape is not pointed so grinding in this shape will result in a flat knife that will not cut.",
                "whereTo": ""
            },
            {
                "id": "b4",
                "image": "",
                "description": "N",
                "answer": false,
                "feedback": "",
                "whereTo": "Incorrect. This shape is pointed but asymmetrical that will unevenly grind your knife."
            }
        ]
    },

    {
        "name": "grinding02",
        "text": "What does a grinder do to sharpen a knife?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "It bends the point back in line",
                "answer": false,
                "feedback": "Incorrect. A grinder does not bend anything.",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "It removes material to make a point",
                "answer": true,
                "feedback": "Correct!",
                "whereTo": ""
            },
            {
                "id": "b3",
                "image": "",
                "description": "It adds material to create a point",
                "answer": false,
                "feedback": "Incorrect. This shape is not pointed so grinding in this shape will result in a flat knife that will not cut.",
                "whereTo": ""
            },
            {
                "id": "b4",
                "image": "",
                "description": "It heats the material back into a point with friction",
                "answer": false,
                "feedback": "",
                "whereTo": "Incorrect. This shape is pointed but asymmetrical that will unevenly grind your knife."
            }
        ]
    },

    {
        "name": "honing01",
        "text": "What shape knife point will the steel sharpen?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "Bent",
                "answer": true,
                "feedback": "Correct!",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "Flat",
                "answer": false,
                "feedback": "Incorrect. A flat knife wouldn’t have a point at all.",
                "whereTo": ""
            },
            {
                "id": "b3",
                "image": "",
                "description": "Round",
                "answer": false,
                "feedback": "Incorrect. A round point would not be able to be bent back into shape as a steel does.",
                "whereTo": ""
            },
            {
                "id": "b4",
                "image": "",
                "description": "Pointed",
                "answer": false,
                "feedback": "",
                "whereTo": "Incorrect. If the point is intact, it would not need sharpening."
            }
        ]
    },


    {
        "name": "honing02",
        "text": "Why doesn’t a steel produce particles?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "Particles get trapped in the steel rod",
                "answer": false,
                "feedback": "Incorrect. The steel rod is solid so there is no where for particles to get trapped.",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "The steel doesn’t shave off any materials",
                "answer": true,
                "feedback": "Correct",
                "whereTo": ""
            },
            {
                "id": "b3",
                "image": "",
                "description": "The steel incorporates the particles into the knife",
                "answer": false,
                "feedback": "Incorrect. No sharpening processes described involve material being added to a knife.",
                "whereTo": ""
            },
            {
                "id": "b4",
                "image": "",
                "description": "Particles fall off the rod because it is round",
                "answer": false,
                "feedback": "Incorrect. Some particles would still have clung to the knife if any were made which would have been seen when the knife is wiped off.",
                "whereTo": ""
            }
        ]
    }
]