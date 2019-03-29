/**
 * Created by: Greg Bunyea
 * Modified by: Hao Li
 */

let template = {
    "name": "",
    "text": "",
    "buttons": [
        {
            "id": "b1",
            "image": "",
            "description": "",
            "answer": true,
            "feedback": "",
            "whereTo": ""
        },
        {
            "id": "b2",
            "image": "",
            "description": "",
            "answer": false,
            "feedback": "",
            "whereTo": ""
        },
        {
            "id": "b3",
            "image": "",
            "description": "",
            "answer": false,
            "feedback": "",
            "whereTo": ""
        },
        {
            "id": "b4",
            "image": "",
            "description": "",
            "answer": false,
            "feedback": "",
            "whereTo": ""
        }
    ]
}

let questions = [
    // {
    //     "name": "ques1",
    //     "text": "Make a visual of how a steel rod sharpens a kinfe. Which of the following does your answer most resemble?",
    //     "buttons": [
    //         {
    //             "id": "b1",
    //             "image": "assets/round-to-point.png",
    //             "description": "round tip made pointy",
    //             "answer": false,
    //             "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
    //             "whereTo": "scene2"
    //         }, {
    //             "id": "b2",
    //             "image": "assets/curve-to-point.png",
    //             "description": "bent tip straightened",
    //             "answer": true,
    //             "feedback": "Very good, let's see how much you know about sharpening steels.",
    //             "whereTo": "ques4"
    //         }, {
    //             "id": "b3",
    //             "image": "assets/round-to-shorterpoint.png",
    //             "description": "round tip had sides removed to make point",
    //             "answer": false,
    //             "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
    //             "whereTo": "scene2"
    //         }, {
    //             "id": "b4",
    //             "image": "assets/point-to-round.png",
    //             "description": "pointed tip has been rounded off",
    //             "answer": false,
    //             "feedback": "Incorrect, this would mean the knife has gotten more dull",
    //             "whereTo": "ques1"
    //         }
    //     ]
    // },
    // {
    //     "name": "ques2",
    //     "text": "Based on these new pieces of information, do you think there is a difference between how the sharpening tool and sharpening steel works?",
    //     "buttons": [
    //         {
    //             "id": "b1",
    //             "image": "",
    //             "description": "Yes",
    //             "answer": true,
    //             "feedback": "Great job, lets now see what that difference is.",
    //             "whereTo": "scene3"
    //         }, {
    //             "id": "b2",
    //             "image": "",
    //             "description": "No",
    //             "answer": false,
    //             "feedback": "That’s not quite right, but keep watching to learn why. We’ll return to this question again soon.",
    //             "whereTo": "scene3"
    //         }
    //     ]
    // },
    // {
    //     "name": "ques3",
    //     "text": "Now that you know that the sharpening steel uses a different technique from the sharpening tool, which visual shows the mechanism of how using the steel sharpens the knife?",
    //     "buttons": [ //same answers from q1, different order
    //         {
    //             "id": "b1",
    //             "image": "assets/point-to-round.png",
    //             "description": "pointed tip has been rounded off",
    //             "answer": false,
    //             "feedback": "Incorrect, this would mean the knife has gotten more dull",
    //             "whereTo": "ques3"
    //         }, {
    //             "id": "b2",
    //             "image": "assets/round-to-shorterpoint.png",
    //             "description": "round tip had sides removed to make point",
    //             "answer": false,
    //             "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
    //             "whereTo": "scene3"
    //         }, {
    //             "id": "b3",
    //             "image": "assets/round-to-point.png",
    //             "description": "round tip made pointy",
    //             "answer": false,
    //             "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
    //             "whereTo": "scene3"
    //         }, {
    //             "id": "b4",
    //             "image": "assets/curve-to-point.png",
    //             "description": "bent tip straightened",
    //             "answer": true,
    //             "feedback": "Correct!",
    //             "whereTo": "ques4"
    //         }
    //     ]
    // },
    // {
    //     "name": "ques4",
    //     "text": "In this case, what’s the most effective way to make the knife sharp again?",
    //     "buttons": [
    //         {
    //             "id": "b1",
    //             "image": "",
    //             "description": "Grind the edge off and make a new sharp edge",
    //             "answer": false,
    //             "feedback": "That’s not quite right, but keep watching to learn why. We’ll return to this question again soon",
    //             "whereTo": "scene4"
    //         }, {
    //             "id": "b2",
    //             "image": "",
    //             "description": "Realign the blade so the sharp edge is pointing down again",
    //             "answer": true,
    //             "feedback": "Correct!",
    //             "whereTo": "scene4"
    //         }, {
    //             "id": "b3",
    //             "image": "",
    //             "description": "Figure out the new angle to hold the knife at so the sharp edge will be doing the cutting",
    //             "answer": false,
    //             "feedback": "No, this would mean you are going to constantly adjust your cutting angle as you use the knife, there’s a more efficient way.",
    //             "whereTo": "ques4"
    //         }
    //     ]
    // },



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
        "name": "grinding03",
        "text": "Why does a grinder produce particles?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "It shaves off some materials in the sharpening process",
                "answer": true,
                "feedback": "Correct!",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "The grinder uses particles to sharpen like sandpaper, and some come off in the process",
                "answer": false,
                "feedback": "Incorrect. While the grinder would have a particle-like surface, the knife would have to be rough enough to smoothen the grinder.",
                "whereTo": ""
            },
            {
                "id": "b3",
                "image": "",
                "description": "The particles are tiny ball bearings that help the knife glide through the grinder",
                "answer": false,
                "feedback": "Incorrect. This would make the grinder have less friction with the knife resulting in no sharpening.",
                "whereTo": ""
            }
        ]
    },
    {
        "name": "grinding04",
        "text": "A grinder works most like a…",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "Pasta Roller",
                "answer": false,
                "feedback": "",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "Pencil Sharpener",
                "answer": true,
                "feedback": "",
                "whereTo": ""
            },
            {
                "id": "b3",
                "image": "",
                "description": "Comb",
                "answer": false,
                "feedback": "Incorrect. A comb untangles or aligns things, and does not remove materials.",
                "whereTo": ""
            },
            {
                "id": "b4",
                "image": "",
                "description": "Knife",
                "answer": false,
                "feedback": "Incorrect. A knife does remove materials, but sharpens by removing large chunks. A grinder is more gradual.",
                "whereTo": ""
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
    },

    {
        "name": "honing03",
        "text": "A steel works by…",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "Removing a bent knife tip",
                "answer": true,
                "feedback": "Incorrect. The steel does not remove material from the knife.",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "Removing material from the knife to make a sharp point",
                "answer": false,
                "feedback": "Incorrect. The steel does not remove material from the knife.",
                "whereTo": ""
            },
            {
                "id": "b3",
                "image": "",
                "description": "Unbending a bent knife tip",
                "answer": true,
                "feedback": "Correct",
                "whereTo": ""
            },
            {
                "id": "b4",
                "image": "",
                "description": "Making a new point",
                "answer": false,
                "feedback": "Incorrect. The steel does not make a new point, only realigns an existing point.",
                "whereTo": ""
            }
        ]
    },

    {
        "name": "honing04",
        "text": "Imagine you were to hold a knife perpendicular to the steel and try to use it to sharpen. Which of the following is true?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "The friction would sharpen the knife",
                "answer": true,
                "feedback": "Incorrect. Friction would more likely aid in making the knife more dull in this case.",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "The knife would be sharper",
                "answer": false,
                "feedback": "Incorrect. The knife would likely get more dull",
                "whereTo": ""
            },
            {
                "id": "b3",
                "image": "",
                "description": "The knife would leave a cut in the steel rod.",
                "answer": false,
                "feedback": "Incorrect. If the knife is dull enough to need sharpening, it is not likely to make a mark on a steel rod.",
                "whereTo": ""
            },
            {
                "id": "b4",
                "image": "",
                "description": "The point would not be bent back into alignment",
                "answer": false,
                "feedback": "Correct",
                "whereTo": ""
            }
        ]
    },

    {
        "name": "hg01",
        "text": "You have a rectangular piece of metal and would like to turn it into a knife. Which method of sharpening should you choose?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "Grinding",
                "answer": true,
                "feedback": "Correct.",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "Honing",
                "answer": false,
                "feedback": "Incorrect. Honing requires there to be a point that is misaligned.",
                "whereTo": ""
            }
        ]
    },


    {
        "name": "gh02",
        "text": "Your favorite knife isn’t cutting as well as it used to. Which method of sharpening should you try first?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "Grinding",
                "answer": true,
                "feedback": "Incorrect. If you only ever grind your knife, it will eventually consume the knife in the same way that a pencil always gets smaller when sharpened.",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "Honing",
                "answer": false,
                "feedback": "Correct",
                "whereTo": ""
            }
        ]
    },


    {
        "name": "hg03",
        "text": "You tried honing your favorite knife, but it doesn’t seem to have helped. What does this mean about your knife?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "The knife has no point at all and needs grinding to make a new point",
                "answer": true,
                "feedback": "Correct",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "The knife can never be sharpened and should be thrown away",
                "answer": false,
                "feedback": "Incorrect. All knives can be sharpened with grinding.",
                "whereTo": ""
            },
            {
                "id": "b3",
                "image": "",
                "description": "The knife can be honed if you try again",
                "answer": false,
                "feedback": "Incorrect. If you honed properly the first time, no further honing would help realign the point.",
                "whereTo": ""
            },
            {
                "id": "b4",
                "image": "",
                "description": "The knife cannot be grinded down but can get sharper",
                "answer": false,
                "feedback": "Incorrect. All knives can be sharpened with grinding.",
                "whereTo": ""
            }
        ]
    },
    {
        "name": "hg04",
        "text": "What would happen if you put a knife that needed honing into a grinder?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "The bent point would eventually be pushed back into alignment",
                "answer": true,
                "feedback": "Incorrect. Grinding does not realign points.",
                "whereTo": ""
            },
            {
                "id": "b2",
                "image": "",
                "description": "The bent point would eventually be removed until a new point is formed",
                "answer": false,
                "feedback": "Correct",
                "whereTo": ""
            },
            {
                "id": "b3",
                "image": "",
                "description": "Nothing would happen, the point would remain bent",
                "answer": false,
                "feedback": "Incorrect. Grinding will remove material to create a new point.",
                "whereTo": ""
            },
            {
                "id": "b4",
                "image": "",
                "description": "The knife could break the grinder because the point is cutting into the edge of the grinder",
                "answer": false,
                "feedback": "Incorrect. The knife would not be likely to do that as it is being chipped away by the grinder",
                "whereTo": ""
            }
        ]
    }
]