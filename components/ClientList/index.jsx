import { Form, InputNumber, Popconfirm, Table, Typography,Input } from 'antd';
import { useState } from 'react';

const ClientList = (props) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <Table
      rowKey={'_id'}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={props.data}
        columns={mergedColumns}
        rowClassName="editable-row"
        loading={props.loading}
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default ClientList;
