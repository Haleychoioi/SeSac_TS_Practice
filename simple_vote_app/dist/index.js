"use strict";
function createVoteOption(name) {
    return {
        name,
        votes: 0,
    };
}
// 투표 함수
function vote(option) {
    option.votes += 1;
    console.log(`${option.name}에 투표 완료, 현재 투표수 : ${option.votes}`);
}
// 투표수 조회 함수
// 안에서 모든 투표의 투ㅍ수를 콘솔에 출력
function getVoteResults(options) {
    console.log("\n---현재 투표 현황---");
    options.forEach((option) => console.log(`${option.name} : ${option.votes}표`));
    console.log("-------------------------------------------------------");
}
// 모든 투표의 최고 투표 항목을 찾아서 반환하는 함수
// 동점일 경우 첫번째 항목을 반환
// 진행 중인 투표가 없는 경우 null 반환
function getWinner(options) {
    if (options.length === 0)
        return null;
    let winner = options[0];
    // options.forEach((option) => {
    //   if (option.votes > winner.votes) {
    //     winner = option;
    //   }
    // });
    for (let i = 1; i < options.length; i++) {
        if (options[i].votes > winner.votes) {
            winner = options[i];
        }
    }
    console.log(`Winner is ${winner.name}(${winner.votes}).`);
    return winner;
}
function main() {
    // 투표 항목 생성
    const menuOptions = [
        createVoteOption("a"),
        createVoteOption("b"),
        createVoteOption("c"),
        createVoteOption("d"),
    ];
    // 투표 진행
    vote(menuOptions[0]);
    vote(menuOptions[2]);
    vote(menuOptions[0]);
    vote(menuOptions[3]);
    vote(menuOptions[2]);
    vote(menuOptions[0]);
    // 현재 투표 현황 출력
    getVoteResults(menuOptions);
    // 최종 우승 항목 발표
    const winner = getWinner(menuOptions);
    if (winner) {
        console.log(`Winner is ${winner.name}(${winner.votes})`);
    }
    else {
        console.log("아직 투표된 항목이 없습니다.");
    }
}
main();
