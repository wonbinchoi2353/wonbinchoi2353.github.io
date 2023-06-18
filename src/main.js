// $(document).ready(function () {
//     var pages = []; // 연결된 페이지 정보를 저장할 배열

//     // 페이지 정보 수집 및 인덱싱 (예시에서는 수동으로 페이지 정보를 추가하였습니다)
//     pages.push({ title: "Home", url: "https://wonbinchoi2353.github.io/" });
//     pages.push({ title: "TIL", url: "https://wonbinchoi2353.github.io/templtaes/TIL.html" });
//     pages.push({ title: "TIL 2023", url: "https://wonbinchoi2353.github.io/templtaes/TIL2023.html" });
//     pages.push({ title: "WIL", url: "https://wonbinchoi2353.github.io/templtaes/WIL.html" });
//     pages.push({ title: "WIL 2023", url: "https://wonbinchoi2353.github.io/templtaes/WIL2023.html" });

//     // 검색 기능 처리
//     $('#searchInput').on('keyup', function (event) {
//         if (event.keyCode === 13) { // 엔터 키를 눌렀을 때 검색 결과 표시
//             var searchQuery = $(this).val().toLowerCase();
//             var searchResults = [];

//             // 검색어와 일치하는 페이지 검색
//             pages.forEach(function (page) {
//                 if (page.title.toLowerCase().indexOf(searchQuery) !== -1) {
//                     searchResults.push(page);
//                 }
//             });

//             // 페이지 내용에서 검색어 검색
//             if (searchResults.length === 0 && searchQuery.length > 1) {
//                 pages.forEach(function (page) {
//                     $.ajax({
//                         url: page.url,
//                         dataType: 'html',
//                         async: false,
//                         success: function (data) {
//                             if ($(data).text().toLowerCase().indexOf(searchQuery) !== -1) {
//                                 searchResults.push(page);
//                             }
//                         }
//                     });
//                 });
//             }

//             // 검색어의 앞부분으로도 관련 검색어 검색
//             if (searchResults.length === 0 && searchQuery.length > 1) {
//                 var searchQueryPrefix = searchQuery.slice(0, -1);
//                 pages.forEach(function (page) {
//                     if (page.title.toLowerCase().indexOf(searchQueryPrefix) !== -1) {
//                         searchResults.push(page);
//                     }
//                 });
//             }

//             // 검색 결과 표시
//             displaySearchResults(searchResults);
//         }
//     });

//     // 검색 결과 표시 함수
//     function displaySearchResults(results) {
//         var searchResultsContainer = $('#searchResults');
//         searchResultsContainer.empty();

//         if (results.length === 0) {
//             searchResultsContainer.append('<p>검색 결과가 없습니다.</p>');
//         } else {
//             results.forEach(function (result) {
//                 var resultItem = $('<div></div>');
//                 var resultLink = $('<a></a>').attr('href', result.url).text(result.title);
//                 resultItem.append(resultLink);
//                 searchResultsContainer.append(resultItem);
//             });
//         }
//     }
// });
