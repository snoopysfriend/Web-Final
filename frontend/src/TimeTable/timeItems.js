const section=["X","0","1","2","3","4","5","6","7","8","9","10","A","B","C","D"];
const day = ["X","一","二","三","四","五","六"];

const timeItems = Array.from({ length: 112}).map((_, index) => (
    {
        day:`${day[index%7]}`,
        section: `${section[parseInt(index/7)]}`
    }
))
export default timeItems;