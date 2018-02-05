import React from 'react';
import loader from '@loader';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';

route.register('/', { moduleId: 'public/app/component-1' });
route.register('/component-2', { moduleId: 'public/app/component-2' });

const ViewModel = DefineMap.extend('AppComponent', {
	moduleId: 'string',
  CurrentPage: {
    get(val, setVal) {
      if (this.moduleId) {
        loader.import(this.moduleId).then(res => {
          setVal(res && res.default || res);
        });
      }
    }
  },
  init () {
  	route.data = this;
    route.start();
  }
});

class App extends Component {
	render () {
		const { CurrentPage } = this.viewModel;
		if (!CurrentPage) {
			return <div>loading...</div>;
		}
		return <CurrentPage />
	}
}

App.ViewModel = ViewModel;

export default App;
