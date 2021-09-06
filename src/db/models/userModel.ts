import {Sequelize,Model,DataTypes,Optional} from 'sequelize';
import UserAttributes from '../interfaces/user';

class User extends Model <UserAttributes> implements UserAttributes {
    public id!:number;
    public firstname!:string;
    public lastname!:string;
    public email!:string;
    public password!:string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
