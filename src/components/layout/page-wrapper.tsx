import { Tabs } from 'antd'
import FlowEdit from '../../pages/flow-edit';
import Home from '../../pages/node-selected';
import { LexminHeader, LexminFooter } from '@lexmin0412/wc-react'

const tabs = [
  {
    label: "节点交互",
    key: "1",
    children: <Home />,
  },
  {
    label: "拖拽插入节点",
    key: "2",
    children: <FlowEdit />,
  },
];

export default function PageWrapper() {
	return (
    <div className="w-screen h-screen flex flex-col">
			<LexminHeader title='Flow' />
      <Tabs
        defaultActiveKey="1"
        tabPosition='top'
        style={{height: '100vh', flex: 1}}
        items={tabs}
      />
			<LexminFooter />
    </div>
  );
}
