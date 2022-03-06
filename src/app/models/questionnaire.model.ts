import { surveyModel } from "./surveyansver.model";

export class QuestionnaireModel{
    survey_answers: surveyModel[] = [
        {
            hotel_id: 3,
            survey_header_id: 24,
            survey_line_id:5,
            question_group: "",
            question: "İşletmemizi ilk defa mı ziyaret ediyorsunuz?",
            question_type: "boolean",
            description: "",
            priority: 1,
            profile_id:17201,
            answer:null,
            answer_numeric:null
        },
        {
            hotel_id: 3,
            survey_header_id: 24,
            survey_line_id:6,
            question_group: "",
            question: "Genel memnuniyetiniz nasıl?",
            question_type: "nps",
            description: "",
            priority: 1,
            profile_id:17201,
            answer:null,
            answer_numeric:null
        },
        {
            hotel_id: 3,
            survey_header_id: 24,
            survey_line_id:7,
            question_group: "",
            question: "Hijyeni nasıl değerlendirirsiniz?",
            question_type: "smile",
            description: "",
            priority: 1,
            profile_id:17201,
            answer:null,
            answer_numeric:null
        },
        {
            hotel_id: 3,
            survey_header_id: 24,
            survey_line_id: 8,
            question_group: "",
            question: "Tekrar ziyaret etmeyi düşünür müsünüz?",
            question_type: "boolean",
            description: "",
            priority: 1,
            profile_id:17201,
            answer:null,
            answer_numeric: null
        }
    ];

    note :string="Harika bir tatildi çok teşekkür ederiz."
}