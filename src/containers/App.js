import React , {Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchField from '../components/SearchField';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchInput ,requestRobots } from '../actions';

const mapStateToProps = state => {
 return {
  searchFieldInput: state.searchRobots.searchFieldInput,
  isPending: state.fetchRobots.isPending,
  robots : state.fetchRobots.robots,
  error: state.fetchRobots.error,
 }
}

const mapDispatchToProps = (dispatch) => {
  return{
     onSearchChange:(event) => dispatch(setSearchInput(event.target.value)),
     onRequestRobots : () => dispatch(requestRobots())
   }
}
class App extends Component {

  componentDidMount(){
    this.props.onRequestRobots();
  }

 
  render() {
    // const {robots} = this.state;
    const { searchFieldInput ,onSearchChange ,robots, isPending} = this.props;
    
     const filteredRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchFieldInput.toLowerCase())
    })
    if(isPending) {
      return <h1>Loading ...</h1>
    }else{
        return (
       <div className='tc' >
          <h1 className='f1'>Robofriends</h1>
           <SearchField  searchChange={onSearchChange}/>
           <Scroll>
           <ErrorBoundry>
           <CardList robots={filteredRobot} />
           </ErrorBoundry>
           </Scroll>
        </div>
   );
    }

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
