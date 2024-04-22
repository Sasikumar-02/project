import React from "react";
import { Table,  } from "antd";

const TableProduct = ({ title, columns, dataSource }: { title: string, columns: any[], dataSource: any[] }) => (
  <>
    <h5 className="fw-bold m-2 text-primary-blue">{title}</h5>{" "}
    <Table columns={columns} dataSource={dataSource} pagination={false} />{" "}
  </>
);

export default TableProduct;
