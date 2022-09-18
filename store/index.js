// 상태
export const state = {
    page: 0,
    questions: [
        {
            q: "당신은 외향적이십니까?",
            a: [
                {
                    text: "네",
                    value: "e"
                },
                {
                    text: "아니오",
                    value: "i"
                }
            ]
        },
        {
            q: "당신은 감각적이십니까?",
            a: [
                {
                    text: "네",
                    value: "s"
                },
                {
                    text: "아니오",
                    value: "n"
                }
            ]
        },
        {
            q: "당신은 감정적이십니까?",
            a: [
                {
                    text: "네",
                    value: "f"
                },
                {
                    text: "아니오",
                    value: "t"
                }
            ]
        },
        {
            q: "당신은 계획적이십니까?",
            a: [
                {
                    text: "네",
                    value: "j"
                },
                {
                    text: "아니오",
                    value: "p"
                }
            ]
        }
    ],
    result: {
        e: 0,
        i: 0,
        n: 0,
        s: 0,
        t: 0,
        f: 0,
        p: 0,
        j: 0,
    }

}

// commit, state를 변경한다
export const mutations = {
    // 질문에 응답을 했을 때, 저장 되도록 반영한다.
    SET_USER_TYPE(state, type) {
        state.result[type] += 1
        state.page += 1
    },
    PAGE_RESET(state) {
        state.page = 0
        state.result = {
            e: 0,
            i: 0,
            n: 0,
            s: 0,
            t: 0,
            f: 0,
            p: 0,
            j: 0,
        }
    },
    SET_PAGE(state, page) {
        state.page = page
    }
}

// 액션
export const actions = {
    clickButton ({commit}, type) {
        // console.log(Object.keys(context))
        commit("SET_USER_TYPE", type)
    },
    clickResetButton({commit}) {
        commit("PAGE_RESET")
    }
}