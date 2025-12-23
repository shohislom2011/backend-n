<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Dasturlash $model */

$this->title = 'Create Dasturlash';
$this->params['breadcrumbs'][] = ['label' => 'Dasturlashes', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="dasturlash-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
