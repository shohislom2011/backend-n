<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "dawn".
 *
 * @property int $id
 * @property string $downloads
 * @property string $users
 * @property string $newregister
 */
class Dawn extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'dawn';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['downloads', 'users', 'newregister'], 'required'],
            [['downloads', 'users', 'newregister'], 'string'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'downloads' => 'Downloads',
            'users' => 'Users',
            'newregister' => 'Newregister',
        ];
    }

    /**
     * {@inheritdoc}
     * @return DawnQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new DawnQuery(get_called_class());
    }

}
