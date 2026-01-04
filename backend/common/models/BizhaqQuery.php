<?php

namespace common\models;

/**
 * This is the ActiveQuery class for [[Bizhaq]].
 *
 * @see Bizhaq
 */
class BizhaqQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * {@inheritdoc}
     * @return Bizhaq[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return Bizhaq|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
