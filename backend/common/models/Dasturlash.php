<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "dasturlashT".
 *
 * @property int $id
 * @property string $Nomi
 * @property string $malumoti
 * @property string $rasm
 * @property int $narxi
 */
class Dasturlash extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'dasturlashT';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['Nomi', 'malumoti', 'rasm', 'narxi'], 'required'],
            [['malumoti', 'rasm'], 'string'],
            [['narxi'], 'integer'],
            [['Nomi'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'Nomi' => 'Nomi',
            'malumoti' => 'Malumoti',
            'rasm' => 'Rasm',
            'narxi' => 'Narxi',
        ];
    }

    /**
     * {@inheritdoc}
     * @return KurslarQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new KurslarQuery(get_called_class());
    }

}
