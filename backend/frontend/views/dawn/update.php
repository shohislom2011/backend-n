<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Dawn $model */

$this->title = 'Update Dawn: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Dawns', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="dawn-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
