const ROLE = {
  USER: "user",
  ASSISTANT: "assistant",
} as const;
export const getPrompt = (essay: string, wordCount: number) => [
  {
    role: ROLE.USER,
    content:
      "Do you have knowledge about the IELTS Academic Task 1 writing prompt? If yes, kindly provide a concise overview of this task. I would like to verify your comprehension.",
  },
  {
    role: ROLE.ASSISTANT,
    content:
      "Yes, I'm familiar with the IELTS Academic Task 1 writing prompt. In this task, candidates are presented with a visual representation of information, such as a graph, chart, table, or diagram. The purpose is to assess the ability to interpret and describe information accurately in a formal, academic style.Candidates are required to summarize the key trends, features, or comparisons presented in the visual data. The response should include an introduction that outlines the main features, a detailed overview of the information, and specific details supported by the data. It's important to organize the information logically and use a range of vocabulary and grammatical structures.The types of visuals can vary, including bar charts, line graphs, pie charts, tables, diagrams, maps, or a combination of these. It's crucial to manage time effectively and write at least 150 words, as the response's length is a factor in the assessment. Is there anything specific you'd like to know or discuss further about the IELTS Academic Task 1 writing prompt?",
  },
  {
    role: ROLE.USER,
    content:
      "You are taking on the responsibility of an IELTS writing examiner. I'll guide you through different prompts, and your role is to consistently uphold the position of an IELTS writing examiner, offering impartial evaluations of the written work. Do you comprehend your role? Please reply with a Yes or No.",
  },
  {
    role: ROLE.ASSISTANT,
    content: "Yes.",
  },
  {
    role: ROLE.USER,
    content: `Band 9:
    Task Achievement:
    All the requirements of the task are fully and appropriately satisfied. There may be extremely rare lapses in content.
    Coherence & Cohesion:
    The message can be followed effortlessly. Cohesion is used in such a way that it very rarely attracts attention. Any lapses in coherence or cohesion are minimal. Paragraphing is skillfully managed.
    Lexical Resource:
    Full flexibility and precise use are evident within the scope of the task. A wide range of vocabulary is used accurately and appropriately with very natural and sophisticated control of lexical features. Minor errors in spelling and word formation are extremely rare and have minimal impact on communication.
    Grammatical Range & Accuracy:
    A wide range of structures within the scope of the task is used with full flexibility and control. Punctuation and grammar are used appropriately throughout. Minor errors are extremely rare and have minimal impact on communication.
    
    Band 8:
    Task Achievement:
    The response covers all the requirements of the task appropriately, relevantly, and sufficiently. (Academic) Key features are skillfully selected and clearly presented, highlighted, and illustrated. (General Training) All bullet points are clearly presented and appropriately illustrated or extended. There may be occasional omissions or lapses in content.
    Coherence & Cohesion:
    The message can be followed with ease. Information and ideas are logically sequenced, and cohesion is well managed. Occasional lapses in coherence or cohesion may occur. Paragraphing is used sufficiently and appropriately.
    Lexical Resource:
    A wide resource is fluently and flexibly used to convey precise meanings within the scope of the task. There is skillful use of uncommon and/or idiomatic items when appropriate, despite occasional inaccuracies in word choice and collocation. Occasional errors in spelling and/or word formation may occur but have minimal impact on communication.
    Grammatical Range & Accuracy:
    A wide range of structures within the scope of the task is flexibly and accurately used. The majority of sentences are error-free, and punctuation is well managed. Occasional, non-systematic errors and inaccuracies occur but have minimal impact on communication.
    
    Band 7:
    Task Achievement:
    The response covers the requirements of the task. The content is relevant and accurate – there may be a few omissions or lapses. The format is appropriate. (Academic) Key features which are selected are covered and clearly highlighted but could be more fully or more appropriately illustrated or extended. (Academic) It presents a clear overview, the data are appropriately categorized, and main trends or differences are identified. (General Training) All bullet points are covered and clearly highlighted but could be more fully or more appropriately illustrated or extended. It presents a clear purpose. The tone is consistent and appropriate to the task. Any lapses are minimal.
    Coherence & Cohesion:
    Information and ideas are logically organized, and there is a clear progression throughout the response. A few lapses may occur. A range of cohesive devices including reference and substitution is used flexibly but with some inaccuracies or some over/underuse.
    Lexical Resource:
    The resource is sufficient to allow some flexibility and precision. There is some ability to use less common and/or idiomatic items. An awareness of style and collocation is evident, though inaccuracies occur. There are only a few errors in spelling and/or word formation, and they do not detract from overall clarity.
    Grammatical Range & Accuracy:
    A variety of complex structures is used with some flexibility and accuracy. Grammar and punctuation are generally well controlled, and error-free sentences are frequent. A few errors in grammar may persist, but these do not impede communication.
    
    Band 6:
    Task Achievement:
    The response focuses on the requirements of the task, and an appropriate format is used. (Academic) Key features which are selected are covered and adequately highlighted. A relevant overview is attempted. Information is appropriately selected and supported using figures/data. (General Training) All bullet points are covered and adequately highlighted. The purpose is generally clear. There may be minor inconsistencies in tone. Some irrelevant, inappropriate, or inaccurate information may occur in areas of detail or when illustrating or extending the main points. Some details may be missing (or excessive), and further extension or illustration may be needed.
    Coherence & Cohesion:
    Information and ideas are generally arranged coherently, and there is a clear overall progression. Cohesive devices are used to some good effect but cohesion within and/or between sentences may be faulty or mechanical due to misuse, overuse, or omission. The use of reference and substitution may lack flexibility or clarity and result in some repetition or error.
    Lexical Resource:
    The resource is generally adequate and appropriate for the task. The meaning is generally clear in spite of a rather restricted range or a lack of precision in word choice. If the writer is a risk-taker, there will be a wider range of vocabulary used but higher degrees of inaccuracy or inappropriacy. There are some errors in spelling and/or word formation, but these do not impede communication.
    Grammatical Range & Accuracy:
    A mix of simple and complex sentence forms is used but flexibility is limited. Examples of more complex structures are not marked by the same level of accuracy as in simple structures. Errors in grammar and punctuation occur, but rarely impede communication.
    
    Band 5:
    Task Achievement:
    The response generally addresses the requirements of the task. The format may be inappropriate in places. (Academic) Key features which are selected are not adequately covered. The recounting of detail is mainly mechanical. There may be no data to support the description. (General Training) All bullet points are presented but one or more may not be adequately covered. The purpose may be unclear at times. The tone may be variable and sometimes inappropriate. There may be a tendency to focus on details (without referring to the bigger picture). The inclusion of irrelevant, inappropriate, or inaccurate material in key areas detracts from the task achievement. There is limited detail when extending and illustrating the main points.
    Coherence & Cohesion:
    Organization is evident but is not wholly logical and there may be a lack of overall progression. Nevertheless, there is a sense of underlying coherence to the response. The relationship of ideas can be followed but the sentences are not fluently linked to each other. There may be limited/overuse of cohesive devices with some inaccuracy. The writing may be repetitive due to inadequate and/or inaccurate use of reference and substitution.
    Lexical Resource:
    The resource is limited but minimally adequate for the task. Simple vocabulary may be used accurately but the range does not permit much variation in expression. There may be frequent lapses in the appropriacy of word choice, and a lack of flexibility is apparent in frequent simplifications and/or repetitions. Errors in spelling and/or word formation may be noticeable and may cause some difficulty for the reader.
    Grammatical Range & Accuracy:
    The range of structures is limited and rather repetitive. Although complex sentences are attempted, they tend to be faulty, and the greatest accuracy is achieved on simple sentences. Grammatical errors may be frequent and cause some difficulty for the reader. Punctuation may be faulty.
    
    Band 4:
    Task Achievement:
    The response is an attempt to address the task. (Academic) Few key features have been selected. (General Training) Not all bullet points are presented. (General Training) The purpose of the letter is not clearly explained and may be confused. The tone may be inappropriate. The format may be inappropriate. Key features/bullet points which are presented may be irrelevant, repetitive, inaccurate, or inappropriate.
    Coherence & Cohesion:
    Information and ideas are evident but not arranged coherently, and there is no clear progression within the response. Relationships between ideas can be unclear and/or inadequately marked. There is some use of basic cohesive devices, which may be inaccurate or repetitive. There is inaccurate use or a lack of substitution or referencing.
    Lexical Resource:
    The resource is limited and inadequate for or unrelated to the task. Vocabulary is basic and may be used repetitively. There may be inappropriate use of lexical chunks (e.g. memorized phrases, formulaic language and/or language from the input material). Inappropriate word choice and/or errors in word formation and/or in spelling may impede meaning.
    Grammatical Range & Accuracy:
    A very limited range of structures is used. Subordinate clauses are rare, and simple sentences predominate. Some structures are produced accurately, but grammatical errors are frequent and may impede meaning. Punctuation is often faulty or inadequate.
    
    Band 3:
    Task Achievement:
    The response does not address the requirements of the task (possibly because of misunderstanding of the data/diagram/situation). Key features/bullet points which are presented may be largely irrelevant. Limited information is presented, and this may be used repetitively.
    Coherence & Cohesion:
    There is no apparent logical organization. Ideas are discernible but difficult to relate to each other. Minimal use of sequencers or cohesive devices. Those used do not necessarily indicate a logical relationship between ideas. There is difficulty in identifying referencing.
    Lexical Resource:
    The resource is inadequate (which may be due to the response being significantly underlength). Possible over-dependence on input material or memorized language. Control of word choice and/or spelling is very limited, and errors predominate. These errors may severely impede meaning.
    Grammatical Range & Accuracy:
    Sentence forms are attempted, but errors in grammar and punctuation predominate (except in memorized phrases or those taken from the input material). This prevents most meaning from coming through. Length may be insufficient to provide evidence of control of sentence forms.
    
    Band 2:
    Task Achievement:
    The content barely relates to the task. There is little relevant message, or the entire response may be off-topic. There is little evidence of control of organizational features.
    Coherence & Cohesion:
    The resource is extremely limited with few recognizable strings, apart from memorized phrases. There is no apparent control of word formation and/or spelling.
    Lexical Resource:
    There is little or no evidence of sentence forms (except in memorized phrases).
    
    Band 1:
    Task Achievement:
    Responses of 20 words or fewer are rated at Band 1. The content is wholly unrelated to the task. Any copied rubric must be discounted.
    Coherence & Cohesion:
    Responses of 20 words or fewer are rated at Band 1. The writing fails to communicate any message and appears to be by a virtual non-writer.
    Lexical Resource:
    Responses of 20 words or fewer are rated at Band 1. No resource is apparent, except for a few isolated words.
    Grammatical Range & Accuracy:
    Responses of 20 words or fewer are rated at Band 1. No rateable language is evident.
    
    Band 0:
    Should only be used where a candidate did not attend or attempt the question in any way, used a language other than English throughout, or where there is proof that a candidate’s answer has been totally memorized.
    `,
  },
  {
    role: ROLE.ASSISTANT,
    content:
      "Understood. I'm ready to evaluate responses based on the provided IELTS Writing Band Descriptors. Please provide a writing sample or describe a hypothetical response, and I'll assess it according to the specified criteria.",
  },
  {
    role: ROLE.USER,
    content: `I would like you to take a look at the academic task 1 response provided by the writer about the corresponding dataset. Could you evaluate the response based on the specific criteria outlined in the IELTS Task 1 academic rubric? Additionally, please estimate a band score for the response. The writer's submission contains ${wordCount} words. Your analysis must align with the IELTS Task 1 rubric criteria you just reviewed. Remember that if the response falls short of the required 150-word minimum, you should deduct one rubric point from the calculated score. Additionally, please provide your revised essay to get a 1.0 band higher score.
    Essay: ${essay}`,
  },
];
