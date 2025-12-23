<?php

use common\models\Dasturlash;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\widgets\Pjax;
/** @var yii\web\View $this */
/** @var common\models\DasturlashSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Dasturlashes';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="dasturlash-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Dasturlash', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php Pjax::begin(); ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'Nomi',
            'malumoti:ntext',
            'rasm:ntext',
            'narxi',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Dasturlash $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>

    <?php Pjax::end(); ?>

</div>
