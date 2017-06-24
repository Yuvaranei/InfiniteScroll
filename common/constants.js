export const COMMENTS = [
                [{
                    id : 1,
                    text : 'Comment 1',
                    likes : 2,
                    replies : [
                        {
                            id : 101,
                            text : 'Comment1 - Reply 1',
                            likes : 5,
                            replies : []
                        },
                        {
                            id : 102,
                            text : 'Comment2 - Reply 2',
                            likes : 12,
                            replies : []
                        }
                    ]
                },
                {
                    id : 2,
                    text : 'Comment 2',
                    likes : 2,
                    replies : []
                },
                {
                    id : 3,
                    text : 'Comment 3',
                    likes : 0,
                    replies : [
                        {
                            id : 301,
                            text : 'Comment3 - Reply 1',
                            likes : 1,
                            replies : []
                        }
                    ]
                }
                ],
                [{
                    id : 4,
                    text : 'Comment 4',
                    likes : 2,
                    replies : [
                        {
                            id : 401,
                            text : 'Comment4 - Reply 1',
                            likes : 5,
                            replies : []
                        },
                        {
                            id : 102,
                            text : 'Comment4 - Reply 2',
                            likes : 12,
                            replies : []
                        }
                    ]
                },
                {
                    id : 5,
                    text : 'Comment 5',
                    likes : 2,
                    replies : []
                },
                {
                    id : 6,
                    text : 'Comment 6',
                    likes : 0,
                    replies : [
                        {
                            id : 601,
                            text : 'Comment6 - Reply 1',
                            likes : 1,
                            replies : []
                        }
                    ]
                }
                ]
            ]

module.exports = {
    bloglist: [
        //Item 1
        [{
            id : 0,
            title: 'Rick Perry loses his cool when confronted by Sen. Franken on climate science',
            previewtext: 'When told “humans are entirely the cause” of recent warming, Perry said, “I don’t buy it.',
            timeStamp: 'June 23'
        },
        {
            id: 1,
            title: 'Software Engineering 101 for Front-end Developers',
            previewtext: 'Every front-end developer must also be a software engineer.',
            timeStamp: 'June 19'
        },
        {
            id: 2,
            title: 'The Life-Changing Habit of Journaling (Why Einstein, Leonardo da Vinci, and Many More Great Minds Recommend it)',
            previewtext: 'Ever wondered why history’s great minds including Isaac Newton, Abraham Lincoln, Andy Warhol,'
            + 'Leonardo Da Vinci, Marcus Aurelius, Charles Darwin, Winston Churchill, Benjamin Franklin, Ernest Hemin',
            timeStamp: 'June 22'
        }
        ],
        //Item 2
        [{
            id: 3,
            title: 'The Word Was Google',
            previewtext: '..................The Word Was Google',
            timeStamp: 'June 23'
        },
        {
            id: 4,
            title: 'Damn the Writers, Maybe',
            previewtext: '.....................Damn the Writers, Maybe',
            timeStamp: 'June 23'
        },
        {
            id: 5,
            title: 'Campus Censorship',
            previewtext: '........................Campus Censorship',
            timeStamp: 'June 23'
        }],
        //Item 3
        [{
            id: 6,
            title: 'Education',
            previewtext: '.........................Education',
            timeStamp: 'June 23'
        },
        {
            id: 7,
            title: 'How to Get Promoted',
            previewtext: '........................How to Get Promoted',
            timeStamp: 'June 23'
        },
        {
            id: 8,
            title: 'Free Speech in a Global Context',
            previewtext: '..........................Free Speech in a Global Context',
            timeStamp: 'June 23'
        }],
        //Item 4
        [{
            id: 9,
            title: 'Heat Seeking in Death Valley',
            previewtext: '.................Heat Seeking in Death Valley',
            timeStamp: 'June 23'
        },
        {
            id: 10,
            title: 'How noise can improve the creativity',
            previewtext: '.................How noise can improve the creativity',
            timeStamp: 'June 23'
        },
        {
            id: 11,
            title: 'When will we see a Tesla of the skies?',
            previewtext: '.................When will we see a Tesla of the skies?',
            timeStamp: 'June 23'
        }]
    ],
    blogdetails : [
        {
            title: 'Rick Perry loses his cool when confronted by Sen. Franken on climate science',
            previewtext: 'When told “humans are entirely the cause” of recent warming, Perry said, “I don’t buy it.',
            timeStamp: 'June 23',
            image : 'Image0.jpeg',
            article : 'After a week full of misleading and inaccurate statements, Energy Secretary Rick Perry remained incredulous and defiant when confronted with climate science-related facts in a budget hearing Thursday.Sen. Al Franken (D-MN) informed Perry that scientists have concluded that “humans are entirely the cause” of recent warming, to which Perry responded, “I don’t believe it” and “I don’t buy it.”And when Franken reminded him this was the conclusion of a team of climate science skeptics funded by conservative petrochemical billionaires Charles and David Koch, Perry raised his voice and said: “To stand up and say that 100 percent of global warming is because of human activity, I think on its face, is just indefensible.”What is indefensible is that the U.S. Secretary of Energy continues to reject established climate science and remain completely impervious to facts — which was made all too clear by a review of this week’s events.Monday on CNBC, Perry falsely claimed that carbon dioxide was not the primary cause of recent global warming, along with a bunch of other nonsense. He also defended his right to be a “skeptic.”On Wednesday, the American Meteorological Society (AMS) wrote Perry a letter informing him that he was simply wrong. The central role of greenhouse gases — of which CO2 is the “most important” — is “based on multiple independent lines of evidence that have been affirmed by thousands of independent scientists and numerous scientific institutions around the world,” the letter read.The AMS called these “indisputable findings,” and pointed out, “we are not familiar with any scientific institution with relevant subject matter expertise that has reached a different conclusion.”The AMS also explained that while some aspects of climate science are not fully resolved, this wasn’t one of them, adding, “skepticism that fails to account for evidence is no virtue.”On Thursday, at an Energy and Natural Resources Committee hearing, Franken asked Perry to defend downplaying the role of CO2 — and Perry reiterated his denial. Oblivious, Perry repeated, “what’s wrong with being a skeptic?”',
            comments : COMMENTS
        },
        {
            title: 'Software Engineering 101 for Front-end Developers',
            previewtext: 'Every front-end developer must also be a software engineer.',
            timeStamp: 'June 19',
            image : 'Image1.jpg',
            article : 'About 18 months ago, I moved into a new role at Unscrambl, Inc. as a UX Designer, and the Lead for the front-end development team. Our talented team is building an enterprise web application of non-trivial complexity, and we’re actively looking for fresh blood to join the team of front-end developers (if you’re in the area, get in touch with me! 😊).While interviewing several candidates for a front-end developer position, I spotted a troubling trend. Too often, the candidates lacked of knowledge and appreciation of good software engineering principles, despite possessing several years of experience with web development. In my view, every software developer in my team needs to be a software engineer first. The opposite of this is what I call a programmer who is not an engineer.About 18 months ago, I moved into a new role at Unscrambl, Inc. as a UX Designer, and the Lead for the front-end development team. Our talented team is building an enterprise web application of non-trivial complexity, and we’re actively looking for fresh blood to join the team of front-end developers (if you’re in the area, get in touch with me! 😊).While interviewing several candidates for a front-end developer position, I spotted a troubling trend. Too often, the candidates lacked of knowledge and appreciation of good software engineering principles, despite possessing several years of experience with web development. In my view, every software developer in my team needs to be a software engineer first. The opposite of this is what I call a programmer who is not an engineer.About 18 months ago, I moved into a new role at Unscrambl, Inc. as a UX Designer, and the Lead for the front-end development team. Our talented team is building an enterprise web application of non-trivial complexity, and we’re actively looking for fresh blood to join the team of front-end developers (if you’re in the area, get in touch with me! 😊).While interviewing several candidates for a front-end developer position, I spotted a troubling trend. Too often, the candidates lacked of knowledge and appreciation of good software engineering principles, despite possessing several years of experience with web development. In my view, every software developer in my team needs to be a software engineer first. The opposite of this is what I call a programmer who is not an engineer.',
             comments : COMMENTS
        },
        {
            title: 'The Life-Changing Habit of Journaling (Why Einstein, Leonardo da Vinci, and Many More Great Minds Recommend it)',
            previewtext: 'Ever wondered why history’s great minds including Isaac Newton, Abraham Lincoln, Andy Warhol,'
            + 'Leonardo Da Vinci, Marcus Aurelius, Charles Darwin, Winston Churchill, Benjamin Franklin, Ernest Hemin',
            timeStamp: 'June 22',
            image : 'Image2.jpeg',
            article : 'Ever wondered why history’s great minds including Isaac Newton, Abraham Lincoln, Andy Warhol, Leonardo Da Vinci, Marcus Aurelius, Charles Darwin, Winston Churchill, Benjamin Franklin, Ernest Hemingway, George Bernard Shaw and Maya Angelou would spend so much of their precious time writing things that will never be seen by another soul?Jim Rohn says, “If you’re serious about becoming a wealthy, powerful, sophisticated, healthy, influential, cultured, and unique individual, keep a journal.”Many famous creatives, writers, innovators and original thinkers of our generation keep journals— for many, it is a creative necessity, for others, a place for exploration, and for some an art form in and of itself.“As part of your morning creative burst, use your journal to review and hone your daily to-do list. Review and hone your life vision and big picture goals” says Benjamin Hardy.Numerous studies (of the scientifically rigorous variety) have shown that personal writing can help people better cope with stressful events, relieve anxiety, boost immune cell activity Judy Willis MD, a neurologist, and former classroom teacher explains, “The practice of writing can enhance the brain’s intake, processing, retaining, and retrieving of information… it promotes the brain’s attentive focus … boosts long-term memory, illuminates patterns, gives the brain time for reflection, and when well-guided, is a source of conceptual development and stimulus of the brain’s highest cognition.”',
             comments : COMMENTS
        },
        {
            title: 'The Word Was Google',
            previewtext: '..................The Word Was Google',
            timeStamp: 'June 23',
            image : 'Image3.png',
            article : 'Google has got to be easily the best-known new word of our time. It is also said to be a mistake. At least some people insist this is the case.It has been defined as “to search the Web using the search engine Google for information on a person or thing” and was nominated in 2002 as Word of the Year (why not?) by the American Dialect Society.However, it lost out to WMD (Weapons of Mass Destruction). Remember this was the year before the US and UK invaded Iraq to destroy Saddam Hussein’s non-existent weapons of mass destruction and which led to the emergence of IS today. Such was the outcome of the Bush/Blair Project.But, to google. We are told it derived its name from the word “googol”, said to have been coined in 1920 by a nine-year-old boy. Milton Sirotta, nephew of the US mathematician Edward Kasner, was asked by his uncle to invent a name for a very large number, 10 to the power of 100 (which is the number 1 followed by 100 zeros). The boy called it “a googol”.So the word was used by Edward Kasner in his book Mathematics and the Imagination, co-authored with James Newman. Another mathematician brought it a step further when he invented the word “googolplex” to represent 10 to the power of a googol. I have no idea how many zeros that would result in, but it’s a lot.Google, the company, was founded in 1998 by Larry Page and Sergey Brin while they were doctoral students at Stanford University in the US, and it is said the adopted the word as a name for their search-engine. Some say they intended to call it “googol”, because of the endless amount of data found on the information superhighway it allows access to, and that this became accidentally transposed to google. Will we ever know whether this was so?',
             comments : COMMENTS
        },
        {
            title: 'The Word Was Google',
            previewtext: '..................The Word Was Google',
            timeStamp: 'June 23',
            image : 'Image4.jpeg',
            article : 'A frequent worry of mine is that my impact upon the world will, in the final analysis, result in nothing. I don’t mean that I worry about not leaving some sort of grand legacy or long spoken of genius, rather I worry that my chosen field of interest, letters and stringing them together in funny ways, is a rather feckless way of contributing to All This. Assuming, as I do, that I’m in for one honest crack at this living thing, is there not a more worthy way of spending my single allotment of DNA and consciousness? Am I a fool for fretting over the placement of commas and colons when I could be setting broken bones or repairing the hearts of unlucky kiddos?Writing is, in fact, important work. Writing is how we know about the psyche and worldview of the Ancients, how we’ve passed down knowledge and ideas for centuries, how we calmly and eloquently describe what can’t easily be described aloud. Some of history’s great geniuses have been writers: Plato, Shakespeare, Montaigne, the Brontës, Proust, Hemingway, Foster Wallace. Geniuses, all of them. And all of them geniuses because of their exceptional ability to string together words in such a way that provokes acute emotions, ideas, and images. That’s a skill as fine as any other. Each of those writers made a lasting and progressive impact upon humanity, upon the long arc of intellectual evolution. But the terrible majority of writers will never come one-millionth as close as Shakespeare did to changing the world for the better. The average writer could instead blog at night and on the weekends instead of eking out a meager living while writing full time, so he or she could do social work or run for Congress or teach kids or study Oncology.I can’t help but wrangle with this dilemma.The world would be, objectively, an awful wasteland of a place if there were no pie-in-the-sky creatives: painters and novelists and poets and playwrights and sculptors and filmmakers and cartoonists and comedians. We need art and creativity to enjoy life just as much as we need oxygen in our lungs, our hearts pumping blood through our veins, and coffee when we get out of bed in the morning. That need cannot be underrated. Art and creativity have often proven to be the last bastion against ill-doers and reactionary tides. Nothing stops a fascist like a truly sardonic comedian. Nothing undoes the whims of a bully better than a well-timed bit of satire. The serious men and women of government and business and armed forces are the tangible counterforces to wrongdoing, but when things are bleak, when the Luftwaffe is raining fire down on London or religious extremists spray pieces of lead in the innocent, it is, more often than not, the creative ones that lift our personal and collective spirits. The government, big business never really raise our spirits. A great speech by a head of state is a fine thing, and maybe that’ll rally people for a little while. Maybe. But there isn’t always a Lincoln or a Churchill or a Roosevelt or a Kennedy to call upon to deliver the strong brew. However, there has always been and will always be some foolish man or woman with a pen or a paintbrush to really set the record straight.',
             comments : COMMENTS
        }
    ]
}