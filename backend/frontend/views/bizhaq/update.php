<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Bizhaq $model */

$this->title = 'Update Bizhaq: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Bizhaqs', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="bizhaq-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
