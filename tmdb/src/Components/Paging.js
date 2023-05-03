export default function Paging(props) {
    const setNumber = props.setNumber;
    const numbers = [1, 2, 3, 4, 5, 6];

 
    return (
      <div>
        <ul className="paging">
          {numbers.map((e, index) => (
            <div key={index}>
              <button
                className="pagingButton"
                value={e}
                onClick={(number)=>{
                  setNumber(number.target.value)
                  document.body.scrollIntoView({
                  block:"start",
                  inline:"start",
                  behavior:"smooth",
                })}}
              >
                {e}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
    
  }
  