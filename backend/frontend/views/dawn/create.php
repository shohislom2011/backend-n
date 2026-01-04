<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Dawn $model */

$this->title = 'Create Dawn';
$this->params['breadcrumbs'][] = ['label' => 'Dawns', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="dawn-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
