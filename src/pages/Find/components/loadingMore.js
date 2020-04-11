// function loadingMore(method,datas){
//     // 鼠标监听事件
//     window.onscroll = () => {
//         console.log(document.documentElement.scrollTop); //鼠标滚动的高度
//         console.log(document.documentElement.scrollHeight); //页面总高度
//         console.log(document.documentElement.clientHeight); //屏幕的高度
//         if (document.documentElement.scrollTop + 50 >
//           document.documentElement.scrollHeight -document.documentElement.clientHeight) {
//           method.then(res => {
//             // console.log(res.data)
//               datas = datas.concat(res.data.data.data)
//           });
//         }
//       };
// }

// export default loadingMore