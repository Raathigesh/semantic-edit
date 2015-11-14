import TodoApp from './TodoApp';
import TodoMain from './TodoMain';

FlowRouter.route('/', {
  action() {
    ReactLayout.render(TodoApp, {
      children: <TodoMain />
    });
  }
});
