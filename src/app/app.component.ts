import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, BpmnDiagrams, NodeModel, BpmnShapeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: "app-root",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=110 [offsetY]=150 [shape]='shape'></e-node>
          <e-node id='node2' [offsetX]=220 [offsetY]=150 [shape]='shape1'></e-node>
          <e-node id='node3' [offsetX]=330 [offsetY]=150 [shape]='shape2'></e-node>
          <e-node id='node4' [offsetX]=440 [offsetY]=150 [shape]='shape3'></e-node>
          <e-node id='node5' [offsetX]=550 [offsetY]=150 [shape]='shape4'></e-node>
          <e-node id='node6' [offsetX]=660 [offsetY]=150 [shape]='shape5'></e-node>
          <e-node id='node7' [offsetX]=110 [offsetY]=350 [shape]='shape7'></e-node>
          <e-node id='node8' [offsetX]=260 [offsetY]=350 [shape]='shape8'></e-node>
          <e-node id='node9' [offsetX]=420 [offsetY]=350 [shape]='shape9'></e-node>
        </e-nodes>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram: DiagramComponent;
  public shape: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    // set the event type as End
    event: {
      event: 'Start'
    },
    activity: {
      activity: 'Task',
      task: {
        type: 'Send'
      }
    }
  };
  public shape1: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    // set the event type as End
    event: {
      event: 'NonInterruptingStart'
    },
    activity: {
      activity: 'Task',
      task: {
        type: 'Service'
      }
    }
  };
  public shape2: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    // set the event type as End
    event: {
      event: 'Intermediate'
    },
    activity: {
      activity: 'Task',
      task: {
        type: 'Receive'
      }
    }
  };
  public shape3: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    // set the event type as End
    event: {
      event: 'NonInterruptingIntermediate'
    },
    activity: {
      activity: 'Task',
      task: {
        type: 'User'
      }
    }
  };
  public shape4: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    // set the event type as End
    event: {
      event: 'ThrowingIntermediate'
    },
    activity: {
      activity: 'Task',
      task: {
        type: 'BusinessRule'
      }
    }
  };
  public shape5: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    // set the event type as End
    event: {
      event: 'End'
    },
    activity: {
      activity: 'Task',
      task: {
        type: 'Manual'
      }
    }
  };
  public shape7: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    activity: {
      activity: 'SubProcess',
      subProcess: {
        collapsed: true
      }
    }
  };
  public shape8: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    activity: {
      activity: "SubProcess",
      subProcess: {
        type: "Event",
        events: [
          {
            event: 'Start',
            trigger: 'Link'
          }
        ]
      }
    }
  };
  public shape9: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    activity: {
      activity: "SubProcess",
      subProcess: {
        type: "Transaction",
        events: [
          {
            event: 'Start',
            trigger: 'Signal',
            offset: { x: 0.25, y: 1 }
          },
          {
            event: 'Start',
            trigger: 'Timer',
            offset: { x: 0.75, y: 1 }
          }
        ]
      }
    }
  };
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    return node;
  }
}
