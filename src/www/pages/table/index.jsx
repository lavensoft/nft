import React from 'react';
import {
BodyWrapper,
Container,
FormItemDesc,
FormItemName,
RedIcon,
Required,
Title,
FormItem,
Wrapper,
FormWrapper,
Class_But,
Knot,
Text_List,
Table_infomations,
} from './create-nft.elements';
import { Upload, message, Form, Input, Button, Skeleton, Select } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { client } from '../../utilities/ipfs';
import { superheroes } from '../../../declarations';
import { Principal } from '@dfinity/principal';
import { toList } from '../../utilities/idl';
import { idlFactory } from '../../../declarations/superheroes.did.js';
import { customAxios } from '../../utils/custom-axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { withContext } from '../../hooks';
import "./style.css";

const { Dragger } = Upload;
const { Option } = Select;
import { useCanister, useConnect } from '@connect2ic/react';
import styled from '@emotion/styled';

const IPFS_LINK = 'https://dweb.link/ipfs/';

function Table(props) {
const {
isConnected,
disconnect,
activeProvider,
isIdle,
connect,
isConnecting,
principal
} = useConnect();
const [fileImg, setFileImg] = useState(true);
const [listNFt, setListNFt] = useState([]);
const [listAllNFt, setListAllNFt] = useState([]);
const [superheroes, { loading, error }] = useCanister('superheroes');

const [users, setUsers] = useState([]);

function onChange(value) {
	console.log(`selected ${value}`);
}

function onSearch(val) {
	console.log('search:', val);
}

const onChangeFile = async (info) => {
	const { status } = info.file;
	console.log(info);
	message.success(`${info.file.name} file uploaded successfully.`);
	return info.file;
};
const requestUpdate = async (info) => {
	const resImg = await onChangeFile(info);
	setFileImg(resImg);
	info.onSuccess('okk');
};

useEffect(async () => {
	if(principal && superheroes) {
		getListAll();
	}
}, [principal, superheroes]);

const getListAll = async () => {
	console.log('SUPERHEROES_CANISTER_ID', process.env.SUPERHEROES_CANISTER_ID );
	const res = await superheroes.readAccount();

    console.log(res);
	
    setUsers(res);
};

const handleDelete = async() => {
    const res = await superheroes.deleteAccount();
    console.log(res);
    toast.success('Account deleted successfully');
}

const getLIst = async () => {
	// const res = await superheroes.getUserTokens(Principal.fromText(principal));
	// const promise4all = Promise.all(
	// 	res.map(function (el) {
	// 		return customAxios(el.metadata[0]?.tokenUri);
	// 	})
	// );
	// const resu = await promise4all;
	// setListNFt(resu);
};


return (
	// <Container>
	// 	<Wrapper>
	// 		<Title>Create New Item</Title>
	// 		<Required>
	// 			<RedIcon>*</RedIcon> Required fields
	// 		</Required>

	// 		<BodyWrapper>
	// 			<Form
	// 				name='basic'
	// 				labelCol={{ span: 8 }}
	// 				wrapperCol={{ span: 16 }}
	// 				onFinish={onFinish}
	// 				onFinishFailed={onFinishFailed}
	// 				autoComplete='off'>
	// 				<FormWrapper>
	// 					<FormItem>
	// 						<Form.Item
	// 							name='image'
	// 							rules={[{ required: true, message: 'Please upload image!' }]}>
	// 							<Dragger customRequest={requestUpdate}>
	// 								<p className='ant-upload-drag-icon'>
	// 									<InboxOutlined />
	// 								</p>
	// 								<p className='ant-upload-text'>
	// 									Click or drag file to this area to upload
	// 								</p>
	// 								<p className='ant-upload-hint'>
	// 									Support for a single or bulk upload. Strictly prohibit
	// 									from uploading company data or other band files
	// 								</p>
	// 							</Dragger>
	// 						</Form.Item>
	// 					</FormItem>

	// 					<Form.Item
	// 						name='name'
	// 						rules={[{ required: true, message: 'Please input NFT name!' }]}>
					
	// 						<Input size='large' placeholder='NFT name' />
	// 					</Form.Item>

	// 					<Form.Item name='description'>
	// 						<Input
	// 							size='large'
	// 							placeholder='Provide a detailed description of your item'
	// 						/>
	// 					</Form.Item>

	// 					<FormItem>
	// 						<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
	// 							<Button type='primary' htmlType='submit'>
	// 								Submit
	// 							</Button>
	// 						</Form.Item>
	// 					</FormItem>
	// 				</FormWrapper>
	// 			</Form>
	// 		</BodyWrapper>
	// 	</Wrapper>
	// </Container>
	<Container>
		<Wrapper>
		<Class_But>
			<button id='bnx'>pk2e4g...</button>		
		</Class_But>
		<Title>
				Customer List
		</Title>
		<Table_infomations>
			<table style={{background: "#000"}}>
				<thead>
					<tr style={{color: "#000", background: "#fff"}}>
						<td >ID</td>
						<td >Name</td>
						<td >Birtdday</td>
						<td >Phone</td>
						<td >Sex</td>
						<td >sdasdsada</td>
					</tr>
				</thead>
				<tbody>
				    {
                        users.map((item, index) => {
                            return (
                                <tr style={{color: "#000", background: "#fff"}}>
                                    <td >{index + 1}</td>
                                    <td >{item.firstName} {item.lastName}</td>
                                    <td >{item.dateOfBirth}</td>
                                    <td >{item.phone}</td>
                                    <td >{item.sex}</td>
                                    <td >update <a onClick={handleDelete}>delete</a></td>
                                </tr>
                            )
                        })
                    }
				</tbody>					
			</table> 
			<button id='register'>Register</button>
		</Table_infomations>
		</Wrapper>
	</Container>
);
}

export default withContext(Table);