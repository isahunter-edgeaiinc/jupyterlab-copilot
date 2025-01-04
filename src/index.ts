import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  ILayoutRestorer
} from '@jupyterlab/application';

import {
  Widget
} from '@lumino/widgets';

/**
 * Initialization data for the jupyterlab-chatbot extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-copilot:plugin',
  description: 'Assists users in all tasks involved with Machine Learning, AI Development, MLOps Best Practices, Experiments, Model Creation, Model Training, etc...',
  autoStart: true,
  requires: [ILayoutRestorer],
  activate: (app: JupyterFrontEnd, restorer: ILayoutRestorer) => {
    console.log('JupyterLab extension jupyterlab-copilot is activated!');


    // Create a new widget
    const widget = new Widget();
    widget.id = 'jupyterlab-copilot';
    widget.title.label = 'Jupyterlab-Copilot';
    widget.title.closable = true;
    widget.node.innerHTML = `
      <!DOCTYPE html>
      <html>
      <body>
      <iframe src="https://copilotstudio.microsoft.com/environments/Default-c93d6b0a-62d2-4b50-a2e4-9889a5d595a1/bots/cre7a_edgeAiSolutionsNavigator/webchat?__version__=2" frameborder="0" style="width: 100%; height: 100%;"></iframe>
      </body>
      </html>
    `;

    // Add the widget to the right sidebar
    app.shell.add(widget, 'right');

    // Track the widget for restoration
    restorer.add(widget, 'jupyterlab-copilot');
  }
};

export default plugin;

