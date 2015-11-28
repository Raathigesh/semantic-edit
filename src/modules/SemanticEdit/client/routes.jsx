import SemanticEdit from './SemanticEdit';
import SemanticEditMain from './SemanticEditMain';

FlowRouter.route('/', {
  action() {
    ReactLayout.render(SemanticEdit, {
      children: <SemanticEditMain />
    });
  }
});
