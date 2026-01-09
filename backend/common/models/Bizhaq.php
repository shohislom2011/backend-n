<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "Bizhaq".
 *
 * @property int $id
 * @property string $ism
 * @property string $yonalish
 * @property string $rasm
 */
class Bizhaq extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'Bizhaq';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['ism', 'yonalish', 'rasm'], 'required'],
            [['ism'], 'string', 'max' => 150],
            [['yonalish'], 'string', 'max' => 100],
            [['rasm'], 'string', 'max' => 200],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'ism' => 'Ism',
            'yonalish' => 'Yonalish',
            'rasm' => 'Rasm',
        ];
    }

    /**
     * {@inheritdoc}
     * @return BizhaqQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new BizhaqQuery(get_called_class());
    }

}
