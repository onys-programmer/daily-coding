def solution(beginWord, endWord, wordList):
    count = 0

    cur_status = [[beginWord, 0]]
    used_words = []

    while cur_status:
        cur_word = cur_status.pop(0)

        # 최종 단어가 나오면 break
        if endWord == cur_word[0]:
            count = cur_word[1] + 1
            break

        # 단어목록의 단어를 순회
        for word in wordList:
            diff = 0
            for i in range(len(cur_word[0])):
                # word와 현재 워드가 몇 글자 다른지 도출
                if cur_word[0][i] != word[i]:
                    diff += 1
            
            # 한 글자만 다르고 체크한 단어에 없으면 현재 상태 업데이트
            if diff == 1 and word not in used_words:
                cur_status.append([word, cur_word[1] + 1])

                # 쓰인 단어 목록에 해당 단어 추가
                used_words.append(word)
    
    return count   

print(solution("hit", "cog", ["hot","dot","dog","lot","log","cog"]))
print(solution("hit", "cog", ["hot","dot","dog","lot","log"]))