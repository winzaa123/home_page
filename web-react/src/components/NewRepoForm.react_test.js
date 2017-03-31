import React from 'react'
 
class NewRepoForm extends React.Component {
    

//    componentDidMount(){
       
//     //   console.log(this.state.repositoryNames);
//    } 
 

//    shouldComponentUpdate(nextProps) {
   
//     // ดังนั้นเราจึงตรวจสอบ pages ผ่าน props แทน state
//     // อย่าสับสนนะครับ state ที่พูดถึงตรงนี้คือ this.state หรือสถานะของคอมโพแนนท์
//     // ไม่ใช่สถานะของแอพพลิเคชันนะ
//     //    console.log("==========================");
//     //   console.log(nextProps);
//     //    console.log("==========================");
       
//     return this.props.repositoryMyrepo !== nextProps.repositoryMyrepo;
//   }
//     getInitialProps() {
//       console.log("initial");
//       return {
//       repositoryNames: this.props.repositoryMyrepo
//     };
//   }
//   getInitialState (a,b) {
//       console.log("ASCASC");
//       console.log(a);
//       console.log(b);
//        return {repositoryArrays: this.props.repositoryMyrepo};
//     // return {message: 'Hello!'};
//   }
//      replaceState() {
//          console.log("rep");
//      }
//   componentWillUpdate(nextProps, nextState){
//      console.log("componentWillUpdate_NewRepoform");
//     console.log(nextProps);
//      return {repositoryArrays: this.props.repositoryMyrepo};
// }
//     componentWillReceiveProps(nextProps){
//         console.log("componentWillReceiveProps Dash");
//         if (nextProps.repositoryNames !== this.props.repositoryArrays) {
//             this.setState({ repositoryNames: nextProps.repositoryNames })
//         }
//     }
//         componentDidUpdate(prvprop,prevstate){
//                console.log("xxxxxxxxxxxxxxx");
//       console.log(prvprop);
//        console.log("xxxxxxxxxxxxxxxxx");
//     }
//     // componentDidUpdate(prvprop,prevstate){
//     //            console.log("xxxxxxxxxxxxxxx");
//     //   console.log(prvprop);
//     //    console.log("xxxxxxxxxxxxxxxxx");
//     // }
    
    render() {

        return (
            <div className="section">
                <form  >
                    <div className="field">
                
                        <p className="control">
                            <input className="input is-large" type="repoName" placeholder="Enter Repository Name" onChange={ this.props.handleChange }/>
                        </p>
                    </div>
                    <button className="button is-info" onClick={this.props.handleClick }>
                    Add Repository
                    </button>
                </form>
            </div>
        )
    }

}
 
 
 
export default NewRepoForm 